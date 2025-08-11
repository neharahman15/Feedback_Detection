# feedback_project/middleware.py

class DisableCSRFMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.path.startswith('/api/accounts/'):
            setattr(request, '_dont_enforce_csrf_checks', True)
        response = self.get_response(request)
        return response
