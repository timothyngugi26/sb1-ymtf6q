from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from .models import Order, Voucher

def home(request):
    return render(request, 'core/home.html')

def calculator(request):
    return render(request, 'core/calculator.html')

@login_required
def order_list(request):
    orders = Order.objects.filter(customer=request.user).order_by('-created_at')
    return render(request, 'core/order_list.html', {'orders': orders})

@login_required
def order_detail(request, pk):
    order = get_object_or_404(Order, pk=pk, customer=request.user)
    return render(request, 'core/order_detail.html', {'order': order})

@login_required
def voucher_list(request):
    vouchers = Voucher.objects.filter(user=request.user, is_used=False)
    return render(request, 'core/voucher_list.html', {'vouchers': vouchers})