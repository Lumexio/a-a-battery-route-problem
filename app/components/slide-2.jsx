
export default function Slide2() {
  let contentsText=[
    {"title":"What is the problem?"},
    {"title":"The Vehicle Routing Problem(VRP)",
      "style":{"marginBottom":"2rem","textAlign":"left"},
      "content":"Deciding where and in what order to complete deliveries; we are working on a Green version."
    },{
      "style":{"textSize":"5.5rem","textAlign":"left"},
      "content":"Companies use EV delivery vans and must plan routes that serve all customers before the batteries run out, while also choosing when and where to charge."
    },
    {
      "title":"Examples",
      "style":{"textAlign":"left"},
      "content":"Local business, Hospitals, pharmacies, and delivery companies.",
      "text":"This matters because we can have fewer missed deliveries, lower energy cost and emissions as well as a better performance."
    }
  ]
  

  return (
    <>
      {contentsText.map((item, index) => (
        <section key={index} data-auto-animate  style={item?.style}>
          <h1 className="r-fit-text">{item?.title}</h1>
          <p >{item?.content}</p>
          <p >{item?.text}</p>
        </section>
      ))}
    </>
  );
}
