import React, { useState } from 'react'
import "./App.css"
import { auth, FacebookProvider, GithubProvider, googleProvider } from './firebase';

const App = () => {
  const [user, setuser] = useState(null);

const googleLogin= async ()=>{
  try {
    await auth.signInWithPopup(googleProvider);
    setuser(await auth.currentuser);
  } catch (error) {
    console.log(error);
  }
};

const FacebookLogin= async ()=>{
  try {
    await auth.signInWithPopup(FacebookProvider);
    setuser(await auth.currentuser);
  } catch (error) {
    console.log(error);
  }
};
const GithubLogin= async ()=>{
  try {
    await auth.signInWithPopup(GithubProvider);
    setuser(await auth.currentuser);
  } catch (error) {
    console.log(error);
  }
};
console.log(user);

  return (
    <section>
      <div>
        <div className ="buttoncontainer" onClick={googleLogin}>
          <img src="data:image/png;base64,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" alt=""/>
          <button>Google login</button>
        </div>
        <div className ="buttoncontainer" onClick={FacebookLogin}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///9HWZM9UY81S4z09fgxSIqkq8Xd4OpAU5CHkbU7T46Zob5EVpG+w9ZBVJBjcKB/ibBOYJjn6fGwt85ebZ/w8fZreabU1+RUZJrFytt0gKrl5+/N0eBZaZ1dbJ9LXZe5vtOTm7yhqcUVgHx+AAAEAUlEQVR4nO2d6XarIBRGDQ4xBI1mTlozvf9DtmmzbtNGUC6DHNe3fyfgXijo4QBRBAAAAAAAAAAAAAAAAAAAAAAAAAAAADAn8Ytnu+WqavLUJ+ft9d2f5eGY81JM/FLmcX1devGbLnjp2e6BYHzuoR3n6UB+X7B659gv2fIB/T4RfOVWcJEPK/hJ7FQxAEG3ihUb2u4L7uxZLOKh3b4RtaMeNfE9BEphVzeG8zDu0TvcydCfnIf2+sFNI14GHgmfcfMkHod8l/lL/G5fMAlhKPxH7uA23QUyVHxTbu0bhvQY3rH/IGbhjBV30vEb2h8RAzOMpzCEIQytI14Yj6HIORfn/eIvucqRjqFgfD27TDctNS7XCkUqhmW6zt6kVb4pXhRpGIp4q4641PJGJGHI110RJdqGgmeddZI2FKJHSJCyYXlu6z1HZFju+wgSNhR1v28fuoa8ZxyJrCG/9ayTqqHY962TqmH/WCdRw/LYu06ihn27GbKGYt2/TpqGrPt1lLghl38PvqCYCwrXsP9QEUUHxURCuIYdc5vJZrl5sFzRjNPwQl5FUZ3qn18KZYXhGsbSxzBLedkRQqRhKCu/0pufDNZQ2tHcNCdgwzWUzN1udGeYgzUsq/bSV7ozzMEayjIMtBM9wjWct5euXRA5Q+00CGqGCQxhCEMYwhCGMIQhDGEIQxiqEYw/kUoMU/4KoxEvLfdZ8Ywkx+RSvHLbU4jqi6ZX0kU7yZ7AzIzGZGELiomLYAxzo5T6TTp2w6k8ijoSw/HfpSt5nSMxnMvXy43EUBEJH4nhicB4aGZIYR7fzFA+HAZkqJFb8gKJ1QjMZIOHdwp3KTO5kIKCITe5kJuiymAMjdpwplggH4yhURtuKXwBG7VhQ2HtmkkbJrWi4HAMDUaLJYlIlCwzoQ/KHJtgDCf5f29bVSiz+MIxnLDmeW3vWpIxdHpZBdyo6wvI8PcibSbJ+ronXuos5Q7K8BeyvDbtwmEIQxjCEIYwhCEMYQhDGOobks6ngSEMYQhDGMJQFzbC/NLfjDGDFoYwhCEMYQhDGDozdLCvviIjeQhDZt9QtWmTf0PRWBfU31/FqaEsZmeEKkPJu6GT8+WsHPdky9As91jC1MaDaMnQxTEzkTpV0LMhPzgx3FloRDuG4uREMIoq8yOf7Bg6eKF5XMfEuDu1YsgN0gE7MD/VyoZh7qab+cb4xcaCYb5wemLuITa7Uc0N2cnxkcC7iVF3Y2wYV87PPE6q2GBcNDRkQrE5qD12W/VmAK4MSz7xcWj1F9N5k3LGcn1i2Z4KHf9jPObHi8Hafn02h1U206e6tBtW6r9ds8vO39nxAAAAAAAAAAAAAAAAAAAAAAAAAAAAjJcPriR27CHd9lQAAAAASUVORK5CYII=" alt=""/>
          <button>Facebook login</button>
        </div>
        <div className ="buttoncontainer" onClick={GithubLogin}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAkFBMVEX///8XFRUAAAAUEhIPDAwLCAjq6uoRDw8KBgb6+voGAADR0dHx8fHc3NzW1tYVEhLLysrm5uZFRERcW1vAwMBVVFS2trZwb29paGhkY2OlpKTa2tqysrKZmZnv7+92dXU7OjoeHBwxLy89PDwoJiZKSUmNjY2dnJyBgICqqak2NDTEw8MkIiJ0dHSJiIh9fX2ZaVQFAAAKVklEQVR4nO1daXerNhANAxjwvuEtJo7XxM6r/f//XcHYDTZoRqAFt9X90PNO44O4aKRZNXp7MzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDB4IbQb3cnXebbf+HCDdQpX0WI8+AjqfjdhtJarcHcl1XQ920ph217K1f8cHcaDut+xKto/h8+EhetZLNyIzhedf91UDhahB+AwqT3QbAJspuN/EcdBFEulb9PUfuElEzlp1/3mPAiOewC2VCJoQm/aqvv1KXRX8aKrwu6KXrzBLj7q5oBgHMZvKAYP3O9G3TwYmOzAF6SXwAaYvdfNpQCTz2orrwgA01fTjv0Tp07gpnh5JUFtzOXSSyl+1U3rjiCCpmx6VrIW1/26qV3R3YjunCx4MH0B82YlXzp/ATCumd77SdX0pbDhUiu/L5XTlwLWndroBXO105fCgWNN/DprHfwSMV3Vwu9HvXjeAcMadtMISjl8ggwt7QvxrEc873BAs6eoZXvJwoPJf5pf4gxrZLjXzy/ZTLWpi1Ed/GLomsOwJn66GK5q4xdLqQYH6rs+fgnDrmp+xzr5xfrQVRwc/qmXn2X5J6VW24dO+6wYMFPILzhVj1rLYxipIzgtFlD3muuTFhWNYTtporTwb+rM0iWD3/64XJxHG950GYVeTG04jY7LqHg8DxQtwwFjAd6+aNBZbCvmlbLwAabjW9CXITGqluFncebB2f7+pBFtxKYRIMxYK33Gnq3GKv1ijXbO/iqYbKrnz+LJe0i7tNfFMmODAm3YYWmI3JofD6smQHP5CIaMWs1QPsEhKzUG+d9OrKev0fPcJmTR9B2v9/ATB0b5sARjW1NhdjNNNGdY9PPfdEWSfQfnFM7/OkTHyTjGchF9z0bDa3WJf2cJ2yI7usMa1Za9kwZrltQ9LsF/0AjB85JZ260YFT/txvsyCq+FJnaTpb2ZliF8S2T3hvkQzB1t7KznC1onN37OewhZifkTczWD1Dhbg21js120NvdWx851zpiJObn7zAwhqDTZfKjyZcvjHXGSQGmqmWGtJXD38oYZsTO4dlNpXcsC+7Q/skZhbtb1EszaiGJAVmBs+isVUZZ9mE6hpFXI8iJuo9S1BuONdC5nEDyOpjbOdcHHlqML8TiM2mDsEHW+5JgzRKAQDjIGYYEI4kmxSPe4e+cq8Fz+wYAiuBQfA9MR6SDiYzDBdJfuX1eCskeMpRtBafo2jzlVIybBUCRDvTCVwKQYdJxZPEjapSbQU6kIMUMmHX0nOgRVbKA434PrQUuCKtwSUUBYSCHCxJAI0YmOT+2hMJLDg4kGsQxFtRSh5Xu+8sJjYhn2BBOGI7yOXkfhAyGkgloK/3yeJYkEBlb8/k5QyFQklISeqgfcVvQ2Is/Gl6DYs7lBTaHIs1m5gdujFauIO3BVJeTXE+6YpuNwaNxCaKP7aGJKyFfpKGWBhJ0tMVsYV/P6iuN2WDpOxGXC3TG1Me0sUJfNXldfKWhMy1NbkpMFXn4k4M5MMX+zqbIi5xHEIqy+jX5im6jaaNMDgg22CAUCM3jEV+OxohAzZgS8elWSURrsNKElEh0lRF/jUQY0uO5XjuATalDjGVRUTxSXQfCghRPU2LcA11d/qj4WN+N1EkStUbuyPzHGCWpsWYDOYHWHiSD4KmtQGcFX2UWVEVRe4f+Lv2ohqFHR40kYVQRfxVSrTpDwUvS1YghQq786QUIPSq73Q9Be95AXsZtVn4tbMr7qtMQv8Ex29eglbovKKzQigYtSdVv0A32urc+UweOGAvVAREhZ28FoIv5cXHPMAzQsqnEbxXu0CbwHvjtr22Vwx1skJkOcZlVZIZMFUS0jsFRwL0WbsUZUywi4NROCoJ4uIW0PXYLerrrnTZQgeH+0xLaJzyySm2hbeImDHnubqAYUkiM8P2i5lW2IEiArDkWSXLijqcfpJd9BxN6gyhllVU0jwCvGLUFlRReLKtcUVGeX6qb2FRRBR3WhBe6yWcJJLjTrcX2+wlPtb0nijDoSLChDZOsKW230kGwNYvfEAuzUHh0Lqa1Q2xM63pJg8ROa0FJaUflOt84QLvUg7O3rGKqS9QOO09zCCQSyZttSZnQP/tA9BySUyzFPJ2cZqqh5avH0VJBQLscho0nzQemppiNP65qehGIkeh9N4EouHW3PuFrzSIma4HmBO2yYS8z4jjk7e0r5rHgKJjMYHCRpxC5vM4zqyesHPAvLrR1FfmJhHUmg2B1xtzMRiIhm8bTNwHfsBAbdRZjvru0BrMTa1H8sN/wN821J9Y6PZzN67v3/d+YFkgSwjapyDCYzt0y/HWne6GN49O5BT77e+ruC9ekA+JfJoKSwfvSjLQAeSs99TFmXGjxqCu/WjnYVe2JBcSPOpO3UaR6N+RyNQX8xHfrlW15JbIXwmPzwbrHy9yD3p+yv0g45J8ICOKQ7llOhIZ3E5M9z5AJGqc5rjFpEM046sFi5mafUmvjnY3yQ+tFdgDZ6togn8XOq2MZL2gpM0H7+zF56Jmqxb2O2nPPJ8Wwy6sLgJzeglzO5M71M2Qfg+FYJ1iqDCVk68I4gd3TBu2Wwx623LUNIOVcJ1q2GCekV43mL1E+LEABarFOavKmLsPxlP15PMr+i3S6NGA5jf54RAOc1hSt0nVWQ9mn4uWKc6zIIogGjDILbkiJS1EX8VJzdz+8lmWhTUWt//nCCgxUyFUBJb8NCIb0lly7neI0y/0oDLxPJQ1FespEzhW9C2AYYJXcvZZwL2wXYc39mrrhPhp+q5hL5nfQWlfxOLJq3zuXPtS/j9T/7rxJ6isrSPcJZK+JX0Hjhro1aqTTGbvBhOrscFv1yVV6lmlsrbS6xf3LibftXDPsPl3kthzN+j5Anuvz7USU0yWGi/ezDZ65Figkmxk3/tIsS/wNKnOAn86zZEdV1d0nQzUWgftNz3Sj59yqmFgvrOSwRcy5BUEkQPYvnhJZtP20mwfGrdJSbn6DbU16a87ylO4541J7b3PY8DeeGn7dSdy28q/ES1HAbQ4Jnu8MTLhzlJNjTVf2X81CLOxDzg4+gre+kRo6hA5ulwFLkItjTeRIlbx17AOHh574FBJ3+Ysqf2eYhaKvs35ZHQbcsO72C3V2vb9kZ/hIkDkvG0303GPNuNzvG9R8Of+CZDqz5Og/zpVhSKViZBGFbw628LSLPVaJKjiIIYS23uTaGsk7c4ARtjU0lnjDFxFQWQV/vxXyPmCDZZkkEYVjrBfWDLXMSnS33wmGfLnPqE887DqxJLHH8jkkQTpq1XxE6jEkUJ+hKqqIQxtEpesESLZEKCdowrO8O5Sd8rAoubC9BsCCqZkOdm2cenXluKQoRBJBRUyQV/e2TZVOdYDx73zWYZiT64UN+wttUIxjTO9eq+hC0Zpn8RAlFn3GX3Fg4X3H27mgcdndJLaGig51zn7z9S20tRQjGo+RiLB/KVFP/APjJLYbnl1EMKILjPByVK6YeXMLworG9iYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYHB/xJ/A+HljiNdQqEOAAAAAElFTkSuQmCC" alt=""/>
          <button>Github login</button>
        </div>
      </div>
      <h1>{user?.email}</h1>
    </section>
  );
};

export default App;
