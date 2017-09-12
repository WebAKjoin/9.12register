var pop=new Vue();
var vm=new Vue({
	el:'#app',
	template:"#tem",
	data:{
		show:true
	},
	components:{
		'headH':{
			template:"#head",
			data(){
				return {
					icon:'<',
					title:'京东注册'
				}
			}
		},
		"mainH":{
			template:"#main",
			data(){
				return {
					yzm:'',
					phone:'',
					phoneyzm:'',
					passwords:''
				}
			},
			mounted(){
//				console.log(this.yzm)
				this.$root.yzm=this.yzm;
				this.$root.phone=this.phone;
				this.$root.phoneyzm=this.phoneyzm;
				this.$root.passwords=this.passwords;
//				console.log(this.yzm);
			}
		},
		"buttonH":{
			template:"#button",
			methods:{
				consoleFn(){
					console.log('1')
					console.log(this.$root.yzm)
					console.log(this.$root.phone)
					console.log(this.$root.phoneyzm)
					console.log(this.$root.passwords)
//					console.log(pop.$emit);
//					pop.$emit('yzm',)
//					this.$on('yzm',function(data){
//						console.log(data)
//					})
				}
			},
			mounted(){
			}
		}
	}
})
