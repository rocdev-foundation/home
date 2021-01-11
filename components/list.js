const Ordered = (props) => (
  <ol className="mt-2 list-decimal list-outside ml-8" {...props} />
);
const Unordered = (props) => (
  <ul className="mt-2 list-disc list-outside ml-8" {...props} />
);

export default {
  Ordered,
  Unordered,
};
