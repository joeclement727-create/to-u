document.addEventListener("DOMContentLoaded", () => {
  let slide = 0;

  const slides = [
    { text: "Unatuaminia?", choices: [{ label: "Yes", next: 1 }, { label: "No", next: 7 }] },
    { text: "How far do you think I’d go to make us work?", choices: [{ label: "∞", next: 2 }, { label: "Every step", next: 2 }] },
    { text: "How far would you go for us?", choices: [{ label: "∞", next: 3 }, { label: "100/100", next: 3 }] },
    { text: "You’re the only one for me.", choices: [{ label: "True", next: 4 }, { label: "False", next: 8 }] },
    { text: "Am I the one for you?", choices: [{ label: "Yes", next: 5 }, { label: "No", next: 9 }] },
    { text: "Should I tell you a secret?", choices: [{ label: "Yes 💌", next: 6 }, { label: "Not yet 😅", next: 13 }] },

    // Final letter slide
    { text: "LETTER", choices: [] }, 

    { text: "Iko connected?", choices: [{ label: "Yes", next: 10 }, { label: "No", next: 11 }] },
    { text: "You don’t have to believe me, but I’d choose you every day.", choices: [{ label: "True", next: 5 }] },
    { text: "I get that I ain’t perfect, but I’d give my best.", choices: [{ label: "True", next: 5 }] },
    { text: "😢", choices: [{ label: "Continue", next: 12 }] },
    { text: "😌 U gotta stop playing like that", choices: [{ label: "Continue", next: 1 }] },
    { text: "Me natuaminia more than I let on, so I’m gonna make it work", choices: [{ label: "Continue", next: 1 }] },
    { text: "I’m gonna tell you anyways, coz I don’t know how to keep things to myself when it comes to you", choices: [{ label: "Continue", next: 6 }] }
  ];

  function loadSlide() {
    const textEl = document.getElementById("text");
    const choicesEl = document.getElementById("choices");

    choicesEl.innerHTML = "";

    // Final letter slide
    if (slide === 6) {
      textEl.innerHTML = `
<p>Happy Valentine’s.</p>

<p>I hope you'll enjoy today as much as I will.</p>

<p>
A while back, I said I wouldn’t hide my feelings for you — and honestly, I still have.
But now, I want to do more than just say you can trust me.
I want to show you that you are truly the only one for me.
</p>

<p>
I don’t know how I’d ever fully prove that with actions,
but believe me when I say I’d do it every single day if I knew how.
</p>

<p>
It’s not that I want to erase your fear of being love‑bombed and then left alone.
I know how real that fear is — and to be honest, I have similar fears too.
But even that doesn’t compare to how I feel about you.
</p>

<p>
Whether you and I work out or not,
I’ll always know that I tried to love you in the best way I knew how.
I’d gladly face your fears with you —
whether it’s bridges, cows, or being in a relationship.
</p>

<p>
But all of that depends on whether you’d want to do that with me too.
</p>

<p>
Let’s try things together — new or repetitive.
I’d enjoy them either way if it meant doing them with you.
</p>

<p>
I would love to mean as much to you as you mean to me.
And maybe you’ve never noticed — just like a butterfly can’t see its own beauty —
but I’d never fail to hold up a mirror for you, so I could always remind you of how beautiful you truly are, inside and out.
</p>

<p style="margin-top: 20px; font-weight: bold; text-align: center;">
So, in the most honest way I could think of asking:
</p>

<p style="font-size: 18px; font-weight: bold; text-align: center;">
Can I be yours, as you would be mine?
</p>
      `;
      return; // stop further buttons
    }

    // Regular slides
    textEl.innerText = slides[slide].text;

    slides[slide].choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.innerText = choice.label;
      btn.onclick = () => {
        slide = choice.next;
        loadSlide();
      };
      choicesEl.appendChild(btn);
    });
  }

  loadSlide();
});
