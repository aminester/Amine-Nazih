var Typer = {
    text: '',
    accessCountimer: null,
    index: 0,
    speed: 2,
    file: '',
    accessCount: 0,
    deniedCount: 0,
    init: function () {
        accessCountimer = setInterval(function () {
            Typer.updLstChr();
        }, 500);
        // Embedded content to avoid CORS issues
        Typer.text = `<span id="a">amine@nazih</span>:<span id="b">~</span><span id="c">$</span> cd home/<!-- kjsdfhkjdhsfkjdshfkj -->Personal_Website
<span id="a">amine@nazih</span>:<span id="b">~</span><span id="c">$</span> cat <!-- kjsdfhkjdhsfkjdshfkj -->personalwebsite.txt<br/><br/>
Hey there! My name is "<span id="k">Amine Nazih</span>". <!-- sjkfhskjf -->

Want a modern interface? <a href="gui.html"><span id="c">Switch to GUI version</span></a>.

I'm a rising senior computer science student at <span id="a">Northeastern University</span> pursuing a concentration in Artificial Intelligence.<!-- laglaglaglaglaglaglaglaglaglaglaglag -->
<p>Check out my <a href="https://drive.google.com/file/d/19HEk77BZhkbU4vvRHmWVqe8yWGuUW5Ol/view?usp=sharing"><span id="c">resume</span></a>.
<p>
I am interested in full-stack web development, machine learning, and software engineering. I am currently looking for an internship for Fall 2025.</p> <!-- ksjdokhdfgdufdfkjhfkjahdfkjhafkjhakf -->
<p> Here are some skills, frameworks, and languages I am proficient in.
<br><span id="a">Languages:</span> "Python", "JavaScript", "TypeScript", "Java", "Kotlin", "Swift", "C#", "SQL", "Perl"
<br><span id="a">Frameworks:</span> "React", "Next.js", "Node.js", "Flask", "Django", "Spring Boot", "PyTorch", "TensorFlow", "LangChain"
<br><span id="a">Tools:</span> "Git", "Docker", "Linux", "GraphQL", "Figma", "Jupyter", "NLP", "Machine Learning"</p>
<!-- kjdhjhgdgldjhgdwtoiewotwotjdfkjdfffsf -->
<p>Here are some of my work experiences:
<br><span id="b">Mobile Engineering Intern</span>, Expedia Group: <span id="c">June 2025 – August 2025</span>
<br> Leading development of two agentic AI features for Expedia in <span id="b">Kotlin</span> and <span id="b">Swift</span>, cutting p99 latency from 60s+ to ~120ms.
<br> Building production-ready AI chat feature using <span id="b">GraphQL APIs</span> and <span id="b">LangChain</span>.
<br>
<br><span id="b">Junior Web Developer Co-op</span>, National Bureau of Economic Research: <span id="c">January 2025 - June 2025</span>
<br> Modernized subscriber analytics dashboard by replacing legacy <span id="b">Perl APIs</span> with <span id="b">React</span>.
<br> Built automated whitespace analyzer cutting design QA by <span id="b">20 hours per sprint</span>.
<br> Engineered <span id="b">ETL pipelines</span> and <span id="b">GA4 dashboards</span>, reducing report prep time by <span id="b">60%</span>.
<br>
<br><span id="b">Core Quality Assurance Co-op</span>, Verisk Extreme Event Solutions: <span id="c">January 2024 - June 2024</span>
<br> Designed and executed <span id="b">10,000+ Gherkin and C# tests</span> for Azure DevOps deployment.
<br> Developed test scripts using <span id="b">Python</span> and <span id="b">D3.js</span> to improve testing efficiency by <span id="b">30%</span>.
<br>
<br><span id="b">Intern</span>, GroundBreaking Labs: <span id="c">May 2023 - August 2023</span>
<br> Designed the front end of the company's website and user interface using <span id="b">HTML</span>, <span id="b">CSS</span>, and <span id="b">Vanilla JavaScript</span>.
<br> Leveraged <span id="b">FIGMA</span> to implement animations and <span id="b">increased user retention by 25%</span>.
<br> Used <span id="b">Next.js</span> for back-end implementation, integrating front-end designs with robust server-side logic, database integration, and data processing.
<br> Utilized <span id="b">Node.js</span> and <span id="b">SQL</span> to optimize website performance and enhance data management, reducing loading time by 30% and improving scalability.
<br>
<br><span id="b">Research Assistant</span>, Northeastern University: <span id="c">September 2022 - April 2023</span>
<br> Assisted Professor Robert Platt on "Reinforcement Learning and Robotics".
<br> Deployed a pathfinder robot in a simulated obstacle course to compare the performance of the epsilon-greedy, softmax, and UCB exploration strategies in relation to exploitation.
<br> Determined how different exploration strategies impact the learning process and the performance of the robot using <span id="b">stable-baselines</span> and <span id="b">PyBullet</span>.

 <br><br><br>Check out my personal projects!
 <br>
 <br><a href="#"><span id="k">Bronify</span></a>:
 <br> A LeBron James–themed media streaming app that went viral with 7.8M+ page views in 48 hours.
 <br> The project was publicly recognized by <a href="https://youtube.com/shorts/M8K1MSFHVv0?si=ne39KSSsgtDEVxu2"><span id="c">LeBron James himself</span></a> and <a href="https://www.tiktok.com/@primbyontwitch/video/7484759589095820575"><span id="c">LaVar Ball</span></a>.
 <br> Built with Next.js, React, and TypeScript, utilizing Cloudflare R2 for efficient media storage and delivery.
 <br>
 <br><a href="https://pedestra.pages.dev"><span id="k">Pedestra</span></a>:
 <br> Full stack development of Pedestra website using Next.js for back end processes, and Vanilla JS, HTML, and CSS for the front end.
 <br> The website is designed with a responsive user interface compatible with mobile and desktop browsers.
 <br> Pedestra is focused on promoting livable and walkable urban design principles in the United States, generating an average monthly traffic of 3.6k visits.
 <br> Visit the website <a href="https://pedestra.pages.dev"><span id="c">here</span></a>.
 <br>
 <br><a href="https://github.com/aminester/distroGPT/"><span id="k">DistroGPT</span></a>:
 <br> Developed a fast and lightweight repository for training and fine-tuning GPT models.
 <br> DistroGPT is capable of reproducing GPT-2 (124M) on OpenWebText with a single 40GB node.
 <br> It features a 300-line training loop and 300-line definition of the GPT model.
 <br> I utilized PyTorch and GPU acceleration to optimize training and improve results.
 <br> Check out the repository on <a href="https://github.com/aminester/distroGPT/"><span id="c">Github</span></a>.
 <br>
 <br><a href="https://github.com/aminester/One-Piece-FighterZ"><span id="k">One Piece Fighterz</span></a>:
 <br> Developed a smooth and interactive gaming experience for a web-based 2-D fighting game based on Eiichiro Oda's acclaimed anime and manga series, One Piece.
 <br> It is mainly built in JavaScript and HTML, implementing responsive controls and local two-player support.
 <br> Try the game out <a href="https://aminester.github.io/One-Piece-FighterZ"><span id="c">here</span></a> or check out the repository on <a href="https://github.com/aminester/One-Piece-FighterZ/"><span id="c">Github</span></a>.
 <br>
 <br> <a href="https://gojo.pages.dev"><span id="k">GojoGPT</span></a>:
 <br> GojoGPT is a chatbot that generates nonsensical phrases based on the anime and manga series, Jujutsu Kaisen.
 <br> It is trained on a dataset of different lines from the show and trending user-generated content, (e.g. "Nah, I'd win", "Are you Satoru Gojo because you're the strongest, or are you the strongest because you're Satoru Gojo?").
 <br> Visit the website <a href="https://gojogpt.pages.dev"><span id="c">here</span></a>.
 <br>
 <br><a href="https://giniforecast.streamlit.app/"><span id="k">Gini Predictor</span></a>:
 <br> Developed GiniPredictor, an advanced tool for forecasting the <span id="b">Gini Coefficient</span> of multiple countries up to the year 2030.
 <br> GiniPredictor efficiently processes and analyzes income inequality data using <span id="b">Python's pandas and statsmodels</span> libraries, implementing robust <span id="b">ARIMA models</span> for precise time series predictions.
 <br> The project features a streamlined <span id="b">Streamlit application</span> that visualizes historical trends and future forecasts, enhancing user interaction and accessibility.
 <br> I utilized <span id="b">joblib</span> for efficient model storage and <span id="b">seaborn</span> for sophisticated data visualization to optimize performance and deliver insightful results.
 <br> This tool provides valuable insights for policymakers and researchers to understand and address income disparities globally.
 <br> Try the application <a href="https://giniforecast.streamlit.app/"><span id="c">here</span></a>.


<p> Connect with me on LinkedIn or Github! <br> <br><a href="www.linkedin.com/in/amine-nazih-74b00414a">LinkedIn</a>
<br> <a href="https://github.com/aminester">Github</a></p>

Feel free to send me an email at <!-- longlonglongcomment --><a href="mailto:nazih.a@northeastern.edu">nazih.a@northeastern.edu</a>.

<p><span id="a">amine@nazih</span>:<span id="b">~</span><span id="c">$</span></p>`;
    },

    content: function () {
        return $('#console').html();
    },

    write: function (str) {
        $('#console').append(str);
        return false;
    },

    addText: function (key) {
        if (key.keyCode == 18) {
            Typer.accessCount++;

            if (Typer.accessCount >= 3) {
                Typer.makeAccess();
            }
        } else if (key.keyCode == 20) {
            Typer.deniedCount++;

            if (Typer.deniedCount >= 3) {
                Typer.makeDenied();
            }
        } else if (key.keyCode == 27) {
            Typer.hidepop();
        } else if (Typer.text) {
            var cont = Typer.content();
            if (cont.substring(cont.length - 1, cont.length) == '|')
                $('#console').html(
                    $('#console')
                        .html()
                        .substring(0, cont.length - 1),
                );
            if (key.keyCode != 8) {
                Typer.index += Typer.speed;
            } else {
                if (Typer.index > 0) Typer.index -= Typer.speed;
            }
            var text = Typer.text.substring(0, Typer.index);
            var rtn = new RegExp('\n', 'g');

            $('#console').html(text.replace(rtn, '<br/>'));
            window.scrollBy(0, 50);
        }

        // Allow normal link behavior - don't prevent defaults for links or certain keys
        if (key.preventDefault && key.keyCode != 122 && !isLinkEvent(key)) {
            key.preventDefault();
        }

        if (key.keyCode != 122 && !isLinkEvent(key)) {
            // otherway prevent keys default behavior
            key.returnValue = false;
        }
    },

    updLstChr: function () {
        var cont = this.content();

        if (cont.substring(cont.length - 1, cont.length) == '|')
            $('#console').html(
                $('#console')
                    .html()
                    .substring(0, cont.length - 1),
            );
        else this.write('|'); // else write it
    },
};

function replaceUrls(text) {
    var http = text.indexOf('http://');
    var space = text.indexOf('.me ', http);

    if (space != -1) {
        var url = text.slice(http, space - 1);
        return text.replace(url, '<a href="' + url + '">' + url + '</a>');
    } else {
        return text;
    }
}

Typer.speed = 3;
Typer.file = 'CodeNerve.txt';
Typer.init();

var timer = setInterval('t();', 30);
function t() {
    Typer.addText({keyCode: 123748});

    if (Typer.index > Typer.text.length) {
        clearInterval(timer);
    }

}

// Helper function to check if event is related to link interaction
function isLinkEvent(e) {
    return false; // For now, allow all events to be handled normally for links
}

// Enable clicking on links while typing by allowing normal event behavior
document.addEventListener('click', function(e) {
    // Allow clicks on links to work normally
    if (e.target.tagName === 'A' || e.target.closest('a')) {
        // Don't prevent default for link clicks
        return true;
    }
});

document.onkeydown = function (e) {
    if (e.keyCode == 27) {
        // fastforward text
        Typer.index = Typer.text.length;
    }
}