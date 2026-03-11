import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Time "mo:core/Time";

actor {
  type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactSubmission {
    public func compareByEmail(a : ContactSubmission, b : ContactSubmission) : Order.Order {
      Text.compare(a.email, b.email);
    };

    public func compareByName(a : ContactSubmission, b : ContactSubmission) : Order.Order {
      Text.compare(a.name, b.name);
    };
  };

  let submittedContacts = Map.empty<Nat, ContactSubmission>();
  var idCount = 0;

  public shared ({ caller }) func submitMessage(name : Text, email : Text, phone : Text, message : Text) : async () {
    idCount += 1;
    let newContact : ContactSubmission = {
      id = idCount;
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };
    submittedContacts.add(newContact.id, newContact);
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    submittedContacts.values().toArray();
  };

  public query ({ caller }) func getAllContactsSortedByEmail() : async [ContactSubmission] {
    submittedContacts.values().toArray().sort(ContactSubmission.compareByEmail);
  };

  public query ({ caller }) func getAllContactsSortedByName() : async [ContactSubmission] {
    submittedContacts.values().toArray().sort(ContactSubmission.compareByName);
  };

  public query ({ caller }) func getContactById(id : Nat) : async ContactSubmission {
    switch (submittedContacts.get(id)) {
      case (null) { Runtime.trap("Contact submission with this id does not exist") };
      case (?contact) { contact };
    };
  };
};
