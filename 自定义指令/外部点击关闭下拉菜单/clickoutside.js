Vue.directive('clickoutside', {
	bind: function(el, binding, vnode) {
		function documentHandler(e) {
			if (el.contains(e.target)) {
				return false;
			}
			if(bindqing.expression) {
				binding.value(e);
			}
		}
		el.__vueClickOutside__ = documentHandler;
		document.addEventListener('click', documentHandler);
	},
	unbind: function(el, binding) {
		document.removeEventListener('cancel', el.__vueClickOutside__);
		delete el.__vueClickOutside__;
	}
})