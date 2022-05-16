var navHeaderC = new Boolean(false);

function onNavHeaderClick() {
	if(navHeaderC == false )
	{
		var btnnav = document.getElementById("particles-js");
		btnnav.visibility = "hidden";
		navHeaderC = true;
	}
	
	else if(navHeaderC == true)
	{
		var btnnav = document.getElementById("particles-js");
		btnnav.visibility = "visible";
		navHeaderC = false;
	}
}

window.onload = function test() {
    console.log("TEST");
    let newHdiv = document.createElement("div");
    newHdiv.setAttribute("id", "particles-js");
	
    document.getElementsByClassName("container")[0].append(newHdiv);
    document.getElementsByClassName("container")[0].setAttribute("id","containerone");
	
    document.getElementsByClassName("nav--header")[0].setAttribute("onclick","onNavHeaderClick()");
	
    particlesJS("particles-js", 
		{
  "particles": {
    "number": {
      "value": 42,
      "density": {
        "enable": true,
        "value_area": 400.8530152163807
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 2,
        "color": "#38b1d7"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.4,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0.4,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
} );
}
