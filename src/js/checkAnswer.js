const checkAnswer = (e, variant, history, props) => {
  e.preventDefault();
  e.persist();

  const isInclude = props.question[0].correct.includes(variant);
  const {sum} = props.question[0];

  if (!isInclude) {
    const {target} = e;

    return new Promise((resolve, reject) => {
        target.closest('.answer-container').classList.add('clicked');
        const firstInterval = setInterval(() => {
        target.closest('.answer-container').classList.remove('clicked');
        target.closest('.answer-container').classList.add('incorrect');
        resolve();
      }, 2000);
      
      setTimeout(() => {
        props.setActualLevel([0, 1]);
        props.setPassed([]);
        clearInterval(firstInterval);
        history.push('/game-over');
      }, 3000);
    });
 }

  if (isInclude) {
    const {target} = e;
    
    return new Promise((resolve, reject) => {
      target.closest('.answer-container').classList.add('clicked');
      const firstInterval = setInterval(() => {
        target.closest('.answer-container').classList.remove('clicked');
        target.closest('.answer-container').classList.add('correct');
        resolve();
      }, 2000);
      
      setTimeout(() => {
        props.setActualSum(sum);
        props.setActualLevel([]);
        const [from, to] = props.actualLevel;
        props.setActualLevel([from+1, to+1]);
        props.setPassed([...props.passed, sum]);
        clearInterval(firstInterval);
      
        if (sum === '$1,000,000') {
          history.push('/game-over')
        }
      }, 3000);
    });
  } 
}

export default checkAnswer;