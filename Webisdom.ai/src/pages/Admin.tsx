import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, Mail, Building2, MessageSquare, Calendar, RefreshCw, Phone, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string | null;
  confirmation_id: string;
  created_at: string;
}

interface DemoRequest {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  message: string | null;
  created_at: string;
}

interface AuditRequest {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  industry: string | null;
  message: string | null;
  created_at: string;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [demoRequests, setDemoRequests] = useState<DemoRequest[]>([]);
  const [auditRequests, setAuditRequests] = useState<AuditRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const fetchContactSubmissions = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('form_submissions')
        .select('*')
        .eq('submission_type', 'contact')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setContactSubmissions(data || []);
    } catch (error) {
      console.error('Error fetching contact submissions:', error);
      toast({
        title: "Error",
        description: "Failed to fetch contact submissions",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchDemoRequests = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('demo_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setDemoRequests(data || []);
    } catch (error) {
      console.error('Error fetching demo requests:', error);
      toast({
        title: "Error",
        description: "Failed to fetch demo requests",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchAuditRequests = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('audit_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAuditRequests(data || []);
    } catch (error) {
      console.error('Error fetching audit requests:', error);
      toast({
        title: "Error",
        description: "Failed to fetch audit requests",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchAllData = () => {
    fetchContactSubmissions();
    fetchDemoRequests();
    fetchAuditRequests();
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAllData();
    }
  }, [isAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple credential check for admin
    if (email === "admin@gmail.com" && password === "admin@123") {
      setIsAuthenticated(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin dashboard",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setEmail("");
    setPassword("");
    navigate("/");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Webisdom AI - Form Submissions</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={fetchAllData} variant="outline" size="sm">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Button onClick={handleLogout} variant="destructive" size="sm">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        <Tabs defaultValue="contact" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="contact">Contact Forms ({contactSubmissions.length})</TabsTrigger>
            <TabsTrigger value="demo">Demo Requests ({demoRequests.length})</TabsTrigger>
            <TabsTrigger value="audit">Audit Requests ({auditRequests.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact Form Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="text-center py-8">Loading...</div>
                ) : contactSubmissions.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">No contact submissions yet</div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date & Time</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Message</TableHead>
                          <TableHead>Confirmation ID</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {contactSubmissions.map((submission) => (
                          <TableRow key={submission.id}>
                            <TableCell>
                              <div className="flex flex-col">
                                <span className="font-medium">
                                  {new Date(submission.created_at).toLocaleDateString()}
                                </span>
                                <span className="text-sm text-muted-foreground">
                                  {new Date(submission.created_at).toLocaleTimeString()}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell className="font-medium">{submission.name}</TableCell>
                            <TableCell>
                              <a href={`mailto:${submission.email}`} className="text-primary hover:underline">
                                {submission.email}
                              </a>
                            </TableCell>
                            <TableCell className="max-w-xs">
                              <div className="line-clamp-2">{submission.message || '-'}</div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className="font-mono text-xs">
                                {submission.confirmation_id}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="demo">
            <Card>
              <CardHeader>
                <CardTitle>Demo Requests</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="text-center py-8">Loading...</div>
                ) : demoRequests.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">No demo requests yet</div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Company</TableHead>
                          <TableHead>Phone</TableHead>
                          <TableHead>Message</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {demoRequests.map((request) => (
                          <TableRow key={request.id}>
                            <TableCell>
                              {new Date(request.created_at).toLocaleDateString()} <br />
                              <span className="text-sm text-muted-foreground">
                                {new Date(request.created_at).toLocaleTimeString()}
                              </span>
                            </TableCell>
                            <TableCell className="font-medium">{request.name}</TableCell>
                            <TableCell>
                              <a href={`mailto:${request.email}`} className="text-primary hover:underline">
                                {request.email}
                              </a>
                            </TableCell>
                            <TableCell>{request.company || '-'}</TableCell>
                            <TableCell>{request.phone || '-'}</TableCell>
                            <TableCell className="max-w-xs truncate">
                              {request.message || '-'}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="audit">
            <Card>
              <CardHeader>
                <CardTitle>AI Audit Requests</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="text-center py-8">Loading...</div>
                ) : auditRequests.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">No audit requests yet</div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Company</TableHead>
                          <TableHead>Industry</TableHead>
                          <TableHead>Phone</TableHead>
                          <TableHead>Message</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {auditRequests.map((request) => (
                          <TableRow key={request.id}>
                            <TableCell>
                              {new Date(request.created_at).toLocaleDateString()} <br />
                              <span className="text-sm text-muted-foreground">
                                {new Date(request.created_at).toLocaleTimeString()}
                              </span>
                            </TableCell>
                            <TableCell className="font-medium">{request.name}</TableCell>
                            <TableCell>
                              <a href={`mailto:${request.email}`} className="text-primary hover:underline">
                                {request.email}
                              </a>
                            </TableCell>
                            <TableCell>{request.company || '-'}</TableCell>
                            <TableCell>
                              {request.industry && (
                                <Badge variant="outline">{request.industry}</Badge>
                              )}
                            </TableCell>
                            <TableCell>{request.phone || '-'}</TableCell>
                            <TableCell className="max-w-xs truncate">
                              {request.message || '-'}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
