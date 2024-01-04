const ErrorExample = () => {
  let count = 0
  const increCount = () => {
    count += 1
    console.log(count)
  }
  
  return (
    <>
      <h2>useState error example</h2>
      <h3>{count}</h3>
      <button type="button" className="btn" onClick={increCount}>increment</button>
    </>
  );
};

export default ErrorExample;
